console.log("initial");

// IntersectionObserver 객체 생성
const io = new IntersectionObserver(
  (entries, observer) => {
    console.log(entries);

    entries.forEach((entry) => {
      // 보이지 않으면 아무 동작도 하지 않음
      if (!entry.isIntersecting) {
        return;
      }

      const { target } = entry;
      target.style.backgroundImage = "url(https://picsum.photos/200/300)";

      console.log(`dynamic image loaded!`);

      // 가시성 관찰 풀기
      observer.unobserve(target);
    });
  },
  { threshold: 0.7 }
);

Array.from(document.querySelectorAll(".item-box div")).forEach((box) => {
  // observe 시작
  io.observe(box);
});
