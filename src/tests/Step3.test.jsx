import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FormProvider, useForm } from "react-hook-form";
import Step3 from "../components/Step/Step3";

const Wrapper = ({ children }) => {
  const methods = useForm();
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe("Step3 Component", () => {
  // step3
  test("renders the component correctly", () => {
    render(<Step3 />, { wrapper: Wrapper });
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText("Any Medical Conditions (if applicable)")
    ).toBeInTheDocument();
  });
});
