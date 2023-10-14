import Button from "@/components/Ui/Button";
import FormTextField from "@/components/formComponents/FormTextField";
import PasswordTextField from "@/components/formComponents/PasswordTextField";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Link from "next/link";
import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

function Index() {
  const formMethods = useForm();
  function onSubmit() {
    console.log(formMethods.getValues());
  }
  return (
    <div>
      <Header />
      <div className="my-20 flex h-full items-start  justify-center">
        {/* form part */}
        <FormProvider {...formMethods}>
          <form
            onSubmit={formMethods.handleSubmit(onSubmit)}
            className=" w-[500px] "
          >
            <h1 className=" mb-4 text-center text-3xl font-semibold">
              Signup in to JashTech
            </h1>

            <FormTextField
              name="email"
              label="Email"
              icontype="email"
              rules={{ required: "Email required" }}
            />

            <FormTextField
              name="username"
              label="Username"
              icontype="user"
              rules={{ required: "Username required" }}
            />
            <PasswordTextField
              name="password"
              label="password"
              type="password"
              rules={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              }}
            />

            <Button type="primary" className="w-full">
              Create Account
            </Button>
            {/* text below form */}
            <p className="mt-8 text-stone-600">
              By creating an account, you agree with jastech’s{" "}
              <Link href="" className="text-primary">
                terms & conditions
              </Link>
            </p>
            <div className="my-4 font-semibold">
              Already have an account?
              <Link href="/login" className="text-primary">
                Log in
              </Link>
            </div>
          </form>
        </FormProvider>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
