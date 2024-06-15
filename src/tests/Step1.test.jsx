import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FormProvider, useForm } from "react-hook-form";
import Step1 from "../components/Step/Step1";

const Wrapper = ({ children }) => {
  const methods = useForm();
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe("Step1 Component", () => {
  //step1 components
  test("renders the component correctly", () => {
    render(<Step1 />, { wrapper: Wrapper });
    expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Nationality")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone Number")).toBeInTheDocument();
  });
});
