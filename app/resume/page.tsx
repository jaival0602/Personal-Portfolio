import { redirect } from "next/navigation";

export default function ResumePage() {
  // Redirect to the PDF file
  redirect("/Jaival_Resume.pdf");
}
