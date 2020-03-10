<template>
  <div class="banner">
    <div class="container">
      <div class="row">
        <div class="col col-lg-6 col-sm-8 col-xs-12">
          <div class="banner-card">
            <h1 class="text-primary">Great products</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              varius convallis luctus. Nam vitae accumsan lectus. Etiam sit amet
              sollicitudin dui, ac vulputate erat.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner"
};
</script>

<style>
.banner {
  height: 50vh;
  margin: 20px;
  background-image: url(../assets/desert.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
}

.banner-card {
  padding: 20px;
  border-radius: 5px 5px 0 0;
  border-bottom: solid 2px #abcbf6;
  border-bottom-style: dashed;
  background-color: #ffffff5c;
  text-align: left;
}
</style>
