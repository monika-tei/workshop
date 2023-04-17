export default function RandomDog() {
  return (
    <>
      <h1>Random Dog</h1>
      <img src={imgUrl} alt="random dog"></img>
    </>
  );
}

export async function getServerSideProps() {
  const api = "https://dog.ceo/api/breeds/image/random";
  const res = await fetch(api);
  const data = await res.json();
  console.log(imgUrl);

  return {
    props: {
      imgUrl: data.message,
    },
  };
}
