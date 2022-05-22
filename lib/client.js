import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "jwbj1aqh",
  dataset: "production",
  apiVersion: "2021-11-16",
  useCdn: false,
  token:
    "skiF05tbyvoAzJfBdkeLAkiOMKo60UlkowDjxk0edqGBBQSQNth8DkgPUp3dHVra1jw9rgqcw5A1bzC6Pr9cFDhFhiGKh8jPxkJWf4NqbkKhw721FGkzFhkZR9n0xhBIGpBLv05W39k55khMf4hyExKtpnwoLgt1eblHEdju7UUoP7tBMJy0",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
