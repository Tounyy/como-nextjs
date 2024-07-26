const Reviews = () => {
  return (
    <section className="relative flex flex-col sm:flex-row-reverse items-center text-left w-full">
      <div className="relative flex flex-col md:flex-row max-w-[1500px] 4k:max-w-[3000px] mx-auto my-8 p-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

          <div className="grid gap-4">
            <div>
              <img className="max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/img/home/reviews/image-10.png" alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/img/home/reviews/ad.png" alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default Reviews;