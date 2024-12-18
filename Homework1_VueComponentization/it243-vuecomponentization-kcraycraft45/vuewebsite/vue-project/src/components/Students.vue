<template>
  <!-- Students section start -->
  <div class="students-section layout_padding">
    <div class="container-fluid">
      <h1 class="text welcome_text">Welcome New Students!</h1>
      <p class="text sign-up-text">Sign up now to receive a 25-minute trial lesson - completely free!</p>
      <div class="click_bt"><router-view to="/contact">Click To Signup</router-view></div>
      <div class="classes_section">
        <h1 class="classes_text">Classes</h1>
        <div class="dance_main">
          <div class="row">
            <div class="col-sm-3">
              <div class="box active">Ballet Dancing</div>
              <div class="box">Hip Hop Dance</div>
            </div>
            <div class="col-sm-3">
              <div class="box">Break Dance</div>
              <div class="box">Women-only</div>
            </div>
            <div class="col-sm-3">
              <div class="box">Salsa</div>
              <div class="box">Tap Dancing</div>
            </div>
            <div class="col-sm-3 padding_0">
              <div class="image_2"></div>
            </div>
          </div>
        </div>
        <div class="readmore_bt"><!--TODO<a href="#slides">Read More</a>--></div>
      </div>
    </div>
  </div>
  <!-- Students section end -->
</template>

<script>
export default {
  name: 'Students'
}
</script>

