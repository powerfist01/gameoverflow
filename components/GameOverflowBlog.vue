<template>
  <div class="app">
	<div class="card">
		<div class="title">Reviews</div>
		<div class="search-wrapper">
			<img id="search-icon" src="https://assets.codepen.io/1839803/search-icon.svg" />
			<input id="search-field" type="text" placeholder="Search reviews" />
		</div>
		<div class="tags-wrapper">
			<div class="tags-header">Tags</div>
			<div class="tags-container">
				<div class="tag">Experience</div>
				<div class="tag">Quality</div>
				<div class="tag selected">Design</div>
				<div class="tag">Size</div>
				<div class="tag">Features</div>
				<div class="tag">Value</div>
				<div class="tag">Replacement</div>
			</div>
		</div>
		<div class="reviews-list">
			<div class="review-card">
				<div class="review-header">
					<div class="name-group">
						<div class="initials">A</div>
						<p>Alice Banks</p>
					</div>
					<div class="rating">
						<i id='one' class="fas fa-star"></i>
						<i id='one' class="fas fa-star"></i>
						<i id='one' class="fas fa-star"></i>
						<i id='one' class="fas fa-star"></i>
						<i id='one' class="fas fa-star"></i>
					</div>
				</div>
				<div class="review-description">
					The device has a clean design, and the metal housing feels sturdy in my hands. Soft rounded corners make it a pleasure to look at.
				</div>
				<div class="review-details">
					<div class="review-date">Feb 13, 2021</div>
					<div class="share-group">
						<i class="fas fa-share-alt"></i>
						<p>Share</p>
					</div>
				</div>
			</div>
			<div class="review-card">
				<div class="review-header">
					<div class="name-group">
						<div class="initials">A</div>
						<p>Alice Banks</p>
					</div>
					<div class="rating">
						<i id='one' class="fas fa-star"></i>
						<i id='one' class="fas fa-star"></i>
						<i id='one' class="fas fa-star"></i>
						<i id='one' class="fas fa-star"></i>
						<i id='one' class="fas fa-star"></i>
					</div>
				</div>
				<div class="review-description">
					The device has a clean design, and the metal housing feels sturdy in my hands.
					Soft rounded corners make it a pleasure to look at.
				</div>
				<div class="review-details">
					<div class="review-date">Feb 13, 2021</div>
					<div class="share-group">
						<i class="fas fa-share-alt"></i>
						<p>Share</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.app {
	 position: absolute;
	 top: 50%;
	 left: 50%;
	 transform: translate(-50%, -50%);
}
 .app .card {
	 width: 578px;
	 height: 920px;
	 background: #222033;
	 border-radius: 10px;
	 box-sizing: border-box;
	 padding: 30px;
}
 .app .card .title {
	 color: #fff;
	 font-size: 22px;
	 margin-left: 35px;
}
 .app .card .search-wrapper {
	 position: relative;
	 display: flex;
	 justify-content: center;
	 align-items: center;
}
 .app .card .search-wrapper img {
	 width: 23px;
	 height: 23px;
	 position: absolute;
	 left: 50px;
	 color: #8c8aa7;
}
 .app .card .search-wrapper input[type="text"] {
	 width: 450px;
	 height: 70px;
	 background: #262538;
	 border: 1px solid #49485d;
	 border-radius: 10px;
	 margin: 18px 0px;
	 box-sizing: border-box;
	 padding-left: 55px;
	 font-size: 18px;
	 color: #8c8aa7;
	 cursor: text;
}
 .app .card .search-wrapper input[type="text"]:focus {
	 outline: none !important;
}
 .app .card .tags-wrapper {
	 max-height: 130px;
	 margin: 35px;
}
 .app .card .tags-wrapper .tags-header {
	 color: #fff;
	 font-size: 22px;
	 margin-bottom: 14px;
}
 .app .card .tags-wrapper .tags-container .tag {
	 display: inline-flex;
	 background: #1d1c2d;
	 color: #8c8aa7;
	 border-radius: 5px;
	 padding: 12px;
	 margin: 10px 3px;
	 cursor: pointer;
}
 .app .card .tags-wrapper .tags-container .selected {
	 background: #8780f8;
	 color: #fff;
}
 .app .card .reviews-list {
	 display: flex;
	 flex-direction: column;
	 justify-content: center;
	 align-items: center;
}
 .app .card .reviews-list .review-card {
	 display: flex;
	 flex-direction: column;
	 justify-content: space-around;
	 width: 450px;
	 height: 250px;
	 background: #2c2b3f;
	 border-radius: 10px;
	 margin: 10px 0px;
}
 .app .card .reviews-list .review-card .review-header {
	 display: flex;
	 align-items: center;
	 justify-content: space-around;
	 color: #fff;
	 font-weight: bold;
}
 .app .card .reviews-list .review-card .review-header .name-group {
	 display: flex;
	 align-items: center;
}
 .app .card .reviews-list .review-card .review-header .name-group .initials {
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 width: 48px;
	 height: 48px;
	 margin-right: 12px;
	 border-radius: 50%;
	 background: #d56a6a;
}
 .app .card .reviews-list .review-card .review-header .rating i {
	 color: #f3d779;
}
 .app .card .reviews-list .review-card .review-description {
	 color: #fff;
	 font-weight: 400;
	 margin: 0px 45px;
}
 .app .card .reviews-list .review-card .review-details {
	 display: flex;
	 justify-content: space-between;
	 margin: 0px 45px;
	 align-items: center;
	 color: #8c8aa7;
}
 .app .card .reviews-list .review-card .review-details .share-group {
	 display: flex;
	 padding: 8px;
	 border: 1px solid #1f1e2d;
	 border-radius: 5px;
	 cursor: pointer;
}
 .app .card .reviews-list .review-card .review-details .share-group i {
	 margin-right: 10px;
}
 
</style>