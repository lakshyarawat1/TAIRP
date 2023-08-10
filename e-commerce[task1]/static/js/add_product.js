document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const description = document.querySelector("#description").value;
  const price = document.querySelector("#price").value;
  const discounted_price = document.querySelector("#discounted_price").value;
  const image = document.querySelector("#image").value;
  const category = document.querySelector("#category").value;

  const formData = {
    name,
    description,
    price,
    discounted_price,
    image,
    category,
  };
  const response = await fetch("/api/add_product", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseData = await response.json();
  document.getElementById("message").innerHTML = responseData.message;
    e.target.reset();
});
