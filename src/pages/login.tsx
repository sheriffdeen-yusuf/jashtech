import Button from "@/components/Ui/Button";
import FormTextField from "@/components/formComponents/FormTextField";
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
              Log in to JashTech
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
            <div className="mb-2 mt-12 text-primary">
              <Link href="/">Forget Password? </Link>
            </div>

            <Button type="primary" className="w-full">
              Login
            </Button>
          </form>
        </FormProvider>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
