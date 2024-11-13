let mCurrentIndex = 0 
let mImages = [] 
const mUrl = 'images.json' 
const mWaitTime = 5000 



$(document).ready(() => {
  $('.details').hide() 

  startTimer();
  
  $('.moreIndicator').on('click', function () {
    $('.details').slideToggle();
    $('.moreIndicator').toggleClass('rot90');
  })
  $('#nextPhoto').on('click', showNextPhoto);
  $('#prevPhoto').on('click', showPrevPhoto);

  fetchJSON()
})




function fetchJSON() {
  $.ajax({
    url: mUrl,
    dataType: 'json',
    success: function (data) {
      mImages = data.images;
      const image = mImages[mCurrentIndex];
      $('#photo').attr('src', image.imgPath);
      $('.name').text(`Name: ${image.name}`);
      $('.rank').text(`Rank: ${image.rank}`);
      $('.description').text(`Description: ${image.description}`);

      console.log("This is a test to see if JSON file is loading!");
    },
    error: function () {
      alert("Failed to load JSON file!");
    }
  })

}




function swapPhoto() {
  const image = mImages[mCurrentIndex];
  console.log(image.imgPath);
  $('#photo').attr('src', image.imgPath);
  $('.name').text(`Name: ${image.name}`);
  $('.rank').text(`Rank: ${image.rank}`);
  $('.description').text(`Description: ${image.description}`);
}



function showNextPhoto() {
  mCurrentIndex++;
  if (mCurrentIndex == mImages.length) {
    mCurrentIndex = 0;
  }
  swapPhoto()
}



function showPrevPhoto() {
  mCurrentIndex = (mCurrentIndex - 1 + mImages.length) % mImages.length;
  swapPhoto()
}



function startTimer() {
  setInterval(showNextPhoto, mWaitTime);
}