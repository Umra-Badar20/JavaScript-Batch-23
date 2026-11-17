function deletePost() {
    var card = event.target.parentNode.parentNode
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
                    <div class="card-body">
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
                        <button class="btn bgColor text-light px-4" id="editBtn">Edit</button>
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