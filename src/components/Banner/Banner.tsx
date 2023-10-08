import { Banner } from "../../types";

export function Banner({ imgUrl, classContainer, classImg }: Banner) {
  return (
    <section className={`w-full  h-auto cursor-pointer ${classContainer}`}>
      <img
        className={`object-contain w-full h-full ${classImg}`}
        src={imgUrl}
      />
    </section>
  );
}
