<template>
    <div class="pic_box">
        <button class="profile_pic">
            <img class="pic" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/106369197_369173237393695_2138945889638860896_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=GSZuuUgVQ5UAX-diYwL&amp;tp=1&amp;oh=b1ec902a139528266a75625e3859408b&amp;oe=600DC398"/>
        </button>
    </div>
</template>

<script>
export default {
    name: 'MypageProfilePic'
}
</script>

<style scoped>
 .profile_pic{
    /* float:left; */
    margin-top: 50px;
    margin-right: 30px;
    margin-bottom: 30px;
    text-align:center;
    align-items: center;
    border-radius:50%;
    background: #ffffff;
    overflow: hidden;
    cursor:pointer;
    padding:0;
    border:0;
    height:300px;
    width:300px;
  }

  .profile_pic img{
    width:100%;
    height:100%;
  }
</style>