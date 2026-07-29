document.addEventListener("DOMContentLoaded", () => {
  const popupImages = document.querySelectorAll(".popup-img");
  const dialog = document.querySelector(".image-dialog");
  const dialogImg = document.querySelector(".dialog-img");
  const closeButton = document.querySelector(".dialog-close");

  if (!dialog || !dialogImg || !closeButton) {
    return;
  }

  // 画像クリック
  popupImages.forEach((popupImage) => {
    popupImage.addEventListener("click", () => {
      // data-large があればそれを表示
      dialogImg.src = popupImage.dataset.large || popupImage.src;
      dialogImg.alt = popupImage.alt;

      dialog.showModal();

      // 一番上から表示
      dialog.scrollTop = 0;
    });
  });

  // ×ボタン
  closeButton.addEventListener("click", (e) => {
    e.stopPropagation();
    dialog.close();
  });

  // 背景クリック
  dialog.addEventListener("click", (e) => {
    const rect = dialog.getBoundingClientRect();

    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      dialog.close();
    }
  });

  // Escキー
  dialog.addEventListener("cancel", (e) => {
    e.preventDefault();
    dialog.close();
  });
});

// const dialog = document.querySelector(".image-dialog");
// const dialogImg = document.querySelector(".dialog-img");
// const popupImg = document.querySelector(".popup-img");

// popupImg.addEventListener("click", () => {
//   dialogImg.src = popupImage.dataset.large;
//   dialog.showModal();
// });

// dialog.addEventListener("click", () => {
//   dialog.close();
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const popupImages = document.querySelectorAll(".popup-img");
//   const dialog = document.querySelector(".image-dialog");
//   const dialogImg = document.querySelector(".dialog-img");
//   const closeButton = document.querySelector(".dialog-close");

//   if (!dialog || !dialogImg || !closeButton) {
//     return;
//   }

//   popupImages.forEach((popupImage) => {
//     popupImage.addEventListener("click", () => {
//       dialogImg.src = popupImage.src;
//       dialogImg.alt = popupImage.alt;
//       dialog.showModal();

//       // 開いたときに先頭から表示
//       dialog.scrollTop = 0;
//     });
//   });

//   closeButton.addEventListener("click", () => {
//     dialog.close();
//   });

//   // 背景部分をクリックしたときも閉じる
//   dialog.addEventListener("click", (event) => {
//     if (event.target === dialog) {
//       dialog.close();
//     }
//   });

//   // Escキーでも閉じる
//   document.addEventListener("keydown", (event) => {
//     if (event.key === "Escape" && dialog.open) {
//       dialog.close();
//     }
//   });
// });