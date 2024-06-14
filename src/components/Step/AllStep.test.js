import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import AllStep from "./AllStep";
import { addSuccessfully } from "../../utils/Alert";

jest.mock("axios");
jest.mock("../../utils/Alert");

const renderComponent = () => {
  return render(<AllStep />);
};

describe("AllStep Component", () => {
  beforeEach(() => {
    axios.post.mockResolvedValue({ status: 201 });
  });

  it("renders the form and navigates through steps", async () => {
    renderComponent();

    // Step 1: Personal Information
    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Date of Birth/i), {
      target: { value: "2000-01-01" },
    });
    fireEvent.change(screen.getByLabelText(/Nationality/i), {
      target: { value: "American" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter phone number/i), {
      target: { value: "+1234567890" },
    });

    fireEvent.click(screen.getByText(/Next/i));

    // Step 2: Travel Preferences
    await waitFor(() => {
      expect(screen.getByLabelText(/Departure Date/i)).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText(/Departure Date/i), {
      target: { value: "2024-01-01" },
    });
    fireEvent.change(screen.getByLabelText(/Return Date/i), {
      target: { value: "2024-12-31" },
    });
    fireEvent.change(screen.getByLabelText(/Accommodation Preference/i), {
      target: { value: "Space Hotel" },
    });
    fireEvent.change(
      screen.getByLabelText(/Special Requests or Preferences/i),
      {
        target: { value: "Vegan meals" },
      }
    );

    fireEvent.click(screen.getByText(/Next/i));

    // Step 3: Health and Safety
    await waitFor(() => {
      expect(screen.getByLabelText(/Health Declaration/i)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByLabelText(/Yes/i));
    fireEvent.change(screen.getByLabelText(/Emergency Contact Name/i), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Emergency Contact Email/i), {
      target: { value: "jane.doe@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter phone number/i), {
      target: { value: "+0987654321" },
    });
    fireEvent.change(screen.getByLabelText(/Any Medical Conditions/i), {
      target: { value: "None" },
    });

    fireEvent.click(screen.getByText(/Submit/i));

    // Check that the form was submitted successfully
    await waitFor(() => {
      expect(addSuccessfully).toHaveBeenCalledWith("Added successfully");
    });

    // Check that the form was reset
    await waitFor(() => {
      expect(screen.getByLabelText(/Full Name/i).value).toBe("");
    });
  });
});
