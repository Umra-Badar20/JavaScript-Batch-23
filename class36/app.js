var cardBg
function deletePost() {
    var card = event.target.parentNode.parentNode
    card.remove()

}
function editPost() {
    var card = event.target.parentNode.parentNode
    var title = card.children[1].children[0].children[0].children[0].innerText
    var desc = card.children[1].children[0].children[1].children[0].innerText
    document.getElementById("title").value = title
    document.getElementById("desc").value = desc
    card.remove()



}
function post() {
    console.log("post");
    var title = document.getElementById("title")
    var desc = document.getElementById("desc")
    postContainer = document.getElementById("postContainer")
    if (title.value.trim() && desc.value.trim()) {
        postContainer.innerHTML += `
     <div class="card mt-2">
                    <div class="card-header bgColor text-light">
                        @blog
                    </div>
                    <div style="background-image:url(${cardBg})" class="card-body">
                        <figure>
                            <blockquote class="blockquote">
                                <p>${title.value}</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                <em>${desc.value}</em>
                            </figcaption>
                        </figure>
                        
                    </div>
                    <div class="ms-auto m-2">
                        <button class="btn bgColor text-light px-4" id="editBtn" onclick="editPost()">Edit</button>
                        <button class="btn btn-danger" onclick="deletePost()">Delete</button>
                    </div>
                </div>
     `
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Title & description can't be empty",
        });
    }
    title.value = ""
    desc.value = ""
}

function selectImg(src) {
    cardBg = src
    console.log(cardBg);

    var bgImg = document.getElementsByClassName("bgImg")
    for (var i = 0; i < bgImg.length; i++) {
        bgImg[i].className = "bgImg"
    }
    // event.target.className +=" selected"
    event.target.classList.add("selected")


}