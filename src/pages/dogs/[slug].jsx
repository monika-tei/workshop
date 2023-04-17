export default function Dogs() {
  return <h1>Sluggin'</h1>;
}

export async function getServerSideProps() {
  return {
    props: {
      data: "a string",
    },
  };
}

/**and write anything /dogs/ghsdfjgdjfhg */
