let mypost  = [];



function Post(){
let PostStorage = JSON.parse(localStorage.getItem("PostStorage")) || [];
let modal  = document.getElementById("Post-Modal");
let input = document.getElementById("myinput").value;

// let caption = document.getElementById("caption").innerHTML;


    // pusig my inputed text and save to local storage 
    PostStorage.push({Inputtedtext : input});
    localStorage.setItem("PostStorage", JSON.stringify(PostStorage));
    document.getElementById("caption").innerHTML = input;

    // mypost = PostStorage;
    mypost = PostStorage.reverse();
    showPost();

    modal.classList.remove("pop-modal-show");
    
    // window.location.reload();
  
}


let PostStorage = JSON.parse(localStorage.getItem("PostStorage")) || [];
let postContainer = document.getElementById("postContainer");
function showPost(){

    postContainer.innerHTML = "";
    let postNumber = 0;
    mypost.forEach(function(PostStorage){
    postNumber++;
    postContainer.innerHTML +=

        `
        <div class="user-new-post popup">
        <div class="user-new-header">
            <div class="myimage-post">
                <div class="my-image">
                    <img style="height:40px;width:40px;border-radius: 50%;" src="./images/me.jpg" alt="">
                </div>
                <span>
                    <small>Daniel Llamedo Abellana</small>
                    <small style="display: flex; align-items: center;">
                        <span id="time"></span>
                        <span><svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em" class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1kpxq89 xsmyaan" title="Shared with Public"><title>Shared with Public</title><g fill-rule="evenodd" transform="translate(-448 -544)"><g><path d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434" transform="translate(354 143.5)"></path><path d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096" transform="translate(354 143.5)"></path><path fill-rule="nonzero" d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" transform="translate(354 143.5)"></path></g></g></svg></span>
                    </small>
                </span>
            </div>

            <!-- action oad delete -->
            <div class="action-delete">
                <span>
                    <svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1qx5ct2 xw4jnvo"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg>
                </span>
                <span onclick="Deletepost(${postNumber - 1})">
                    <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/3BCygWRDmmw.png?_nc_eui2=AeHaYyFNyUzW1FF911OTzIZXuZHQOF6FF2a5kdA4XoUXZvm3_SeP4n19d3KvJUcDmhrxKF_rJB1OxBCECytYX9Up&quot;); background-position: -44px -110px; background-size: 190px 190px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>
                </span>
            </div>

        </div>

        <!-- this section where user post  -->
        <div class="mypost">
            <div class="user-caption">
                <p id="caption">${PostStorage.Inputtedtext}</p>
                <!-- <p></p> -->
            </div>
            <div class="user-img-post" id="PutImage">
            <!--<img src="" alt="">-->
              
            </div>
        </div>

        <div class="user-new-bottom">
            <div class="reaction-cont">
                <span class="heart-react">
                        <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e" alt="">
                    <small>52</small>
                </span>
                <span>3 comments</span>
            </div>

            <div class="like-comment">
                <span>
                    <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/rofbDCNQVKy.png?_nc_eui2=AeHCtKfOJULRfQoiHMYyXwFiPHb-lLkwfKM8dv6UuTB8o9z0g2wtHhEvX6hckBJCP3Zw88QMzFT0nHnS8gDoymFx&quot;); background-position: 0px -302px; background-size: 26px 864px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
                    <small>Like</small>
                </span>
                <span>
                    <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/rofbDCNQVKy.png?_nc_eui2=AeHCtKfOJULRfQoiHMYyXwFiPHb-lLkwfKM8dv6UuTB8o9z0g2wtHhEvX6hckBJCP3Zw88QMzFT0nHnS8gDoymFx&quot;); background-position: 0px -262px; background-size: 26px 864px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
                    <small>Comment</small>
                </span>
                <span>
                    <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/rofbDCNQVKy.png?_nc_eui2=AeHCtKfOJULRfQoiHMYyXwFiPHb-lLkwfKM8dv6UuTB8o9z0g2wtHhEvX6hckBJCP3Zw88QMzFT0nHnS8gDoymFx&quot;); background-position: 0px -322px; background-size: 26px 864px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
                    <small>Share</small>
                </span>
            </div>

        </div>
    </div>
        `
    });
   
}
mypost = JSON.parse(localStorage.getItem("PostStorage")) || [];
showPost();


// delete post
function Deletepost(postNumber){
    let PostStorage = JSON.parse(localStorage.getItem("PostStorage")) || [];
    PostStorage.splice(postNumber, 1);
    localStorage.setItem("PostStorage", JSON.stringify(PostStorage));
    // mypost = PostStorage.reverse();
    mypost = PostStorage;
    
    showPost();

}



function addZero(i) {
    if (i < 10) {i = "" + i}
    return i;
  }
  
  const d = new Date();
//   let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
//   let s = addZero(d.getSeconds());
//   let time = h + ":" + m + ":" + s;
  let time =  m +" m";
  document.getElementById("time").innerHTML = time;
//   showPost();









// open modal
function OpenModal(){
let modal  = document.getElementById("Post-Modal");

    modal.classList.add("pop-modal-show");
}

function closeModal(){
let modal  = document.getElementById("Post-Modal");

    modal.classList.remove("pop-modal-show");
}
