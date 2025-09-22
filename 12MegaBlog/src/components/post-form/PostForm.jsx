import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "../index.js";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  //
  const [previewImage, setPreviewImage] = useState(
    post ? appwriteService.getFilePreview(post.featuredImage) : null
  );
  //

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;

      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }

      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id,
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-wrap'>
      <div className='w-2/3 px-2'>
        <Input
          label='Title :'
          placeholder='Title'
          className='mb-4'
          {...register("title", { required: true })}
        />
        <Input
          label='Slug :'
          placeholder='Slug'
          className='mb-4'
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label='Content :'
          name='content'
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className='w-1/3 px-2'>
        <Input
          label='Featured Image :'
          type='file'
          className='mb-4'
          accept='image/png, image/jpg, image/jpeg, image/gif'
          {...register("image", { required: !post })}
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              const url = URL.createObjectURL(e.target.files[0]);
              setPreviewImage(url);
            }
          }}
        />
        {/* {post && (
          <div className='w-full mb-4'>
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className='rounded-lg'
            />
          </div>
        )} */}
        {/* Replace your img display section with this */}
        {previewImage && (
          <div className='w-full mb-4'>
            <img
              src={previewImage}
              alt={post?.title || "Preview"}
              className='rounded-lg max-h-64 object-contain'
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label='Status'
          className='mb-4'
          {...register("status", { required: true })}
        />
        <Button
          type='submit'
          bgColor={post ? "bg-green-500" : "bg-blue-600"}
          className={`w-full text-white py-2 px-4 rounded-lg 
    ${
      post
        ? "hover:bg-green-600 active:bg-green-700"
        : "hover:bg-blue-700 active:bg-blue-800"
    }
    transition-colors duration-200`}>
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}
