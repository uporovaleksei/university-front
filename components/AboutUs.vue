<script>
export default {}
</script>

<template>
  <div class="container">
    <div class="project">
      <h1>О проекте</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptate perferendis iste optio nobis autem at
        quas perspiciatis, aliquid dolorum vero officia nam soluta laudantium earum culpa voluptatem dolores ab. Dolor
        consequuntur, dignissimos perspiciatis laboriosam nemo, error itaque ratione temporibus deserunt sed nesciunt
        reiciendis dolore corporis ipsum dolorum ea ab. Vero earum neque at tenetur sit laboriosam repellat asperiores
        veniam! Eius ipsam dolorem voluptatem aperiam nihil perferendis assumenda. A veritatis distinctio illo
        asperiores excepturi exercitationem nemo commodi esse iusto voluptatem alias voluptatum omnis, magni ea sed
        incidunt porro corrupti quasi!
      </p>
    </div>
    <div class="mission">
      <h1>Наша миссия</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptate perferendis iste optio nobis autem at
        quas perspiciatis, aliquid dolorum vero officia nam soluta laudantium earum culpa voluptatem dolores ab. Dolor
        consequuntur, dignissimos perspiciatis laboriosam nemo, error itaque ratione temporibus deserunt sed nesciunt
        reiciendis dolore corporis ipsum dolorum ea ab. Vero earum neque at tenetur sit laboriosam repellat asperiores
        veniam! Eius ipsam dolorem voluptatem aperiam nihil perferendis assumenda. A veritatis distinctio illo
        asperiores excepturi exercitationem nemo commodi esse iusto voluptatem alias voluptatum omnis, magni ea sed
        incidunt porro corrupti quasi!
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  .project,
  .mission {
    display: flex;
    margin-top: 90px;
    flex-direction: column;
    gap: 40px;
    h1 {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      text-transform: uppercase;
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
    }
  }
}
</style>
