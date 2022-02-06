
import { helpers } from "@vuelidate/validators";

export const supportedFileType = (value) => {

  // if the value is empty then return true because field should be "valid"
  if (!helpers.req(value)) { return true; }

  const allowedFormats = ["jpg", "png", "jpeg", "svg"];
  const extension = value.split(".").pop();
  return allowedFormats.includes(extension);
}
