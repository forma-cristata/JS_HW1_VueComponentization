<template>
  <!-- header section start -->
  <div class="header_section">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="logo"><a href="index.html"><img alt="header-img1" src="../assets/logo.png"></a></div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">INDEX</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/trainings" class="nav-link">TRAININGS</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/classes" class="nav-link">CLASSES</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/shows" class="nav-link">SHOWS</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">ABOUT</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">CONTACT</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <div class="search_icon"><a href="#"><img alt="header-img2" src="../assets/search-icon.png"></a></div>
        </form>
      </div>
    </nav>
  </div>
  <!-- header section end -->
</template>

<script>
export default{
    name: "Header",
}
</script>
