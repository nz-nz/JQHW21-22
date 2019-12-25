// самовызываемая функция
(function() {
    let colorList = ['#F8B195', '#F67280', '#C06C84', '#6C5B7B'];
// let list = ['один', 'два', 'три', 'четыре',];
    let list = {};
    list['один'] = 'Задача организации, в особенности же постоянный количественный рост и сфера нашей активности позволяет оценить значение систем массового участия.';
    list['два'] = 'Повседневная практика показывает, что консультация с широким активом представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям.';
    list['три'] = 'Товарищи! укрепление и развитие структуры играет важную роль в формировании новых предложений.';
    list['четыре'] = 'Задача организации, в особенности же рамки и место обучения кадров в значительной степени обуславливает создание модели развития.';

    let root = $('#root');
    let containerElem = $('<div>');
    containerElem.addClass('container');
    root.append(containerElem);


    Object.keys(list).forEach((elem, args) => {
        let divElem = $('<div>');
        divElem.text(elem);
        divElem.addClass('card');
        let pElem = $('<p>');
        pElem.hide();
        pElem.text(list[elem]);

        divElem.css('background-color', `${colorList[args]}`);

        divElem.append(pElem);
        containerElem.append(divElem);
    });

    $('.card').click(function () {
        $(this).children('p').stop(true).slideToggle(500, () => {
            console.log('done')
        });
        $(this).siblings().children('p').slideUp();
    });
})();
//конец и вызов самовызываемой функции, вниманиие на ()

for (let i = 0; i<$('.page').length; i++){
    let newElem = $('<div>');
    newElem.text(i+1);
    newElem.addClass('btn');

    $('#menuBtns').append(newElem);
}

$('#menuBtns .btn').click(function () {
    let index = $(this).index();
    $('html').animate({
        scrollTop: $('.page').eq(index).offset().top
    })
});

$.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    // type: 'POST',
    // data: JSON.stringify({
    //     title: 'foo',
    //     body: 'bar',
    //     userId: 1
    // }),
    datatype: 'json',
    success: function(data) { getData(data) },
    error: function (pushkin) {console.log(pushkin.statusText)}
    }
);

function getData(data) {
    data.forEach(elem=>{
        let card = $('<div>');
        let title = $('<h2>');
        let body = $('<p>');
        let deleteBtn = $('<div>');
        let deleteBtn2 = $('<div>');
        deleteBtn2.text('Удалить');
        deleteBtn2.addClass('deleteBtn2');


        // console.log(elem);

        card.addClass('card');
        card.attr('id', `${elem.id}`);

        title.text(elem.title);
        body.text(elem.body);
        deleteBtn.text('Удалить');
        deleteBtn.addClass('deleteBtn');

        deleteBtn.click(()=>deletePostWithErr(elem.id));
        deleteBtn2.click(()=>deletePost(elem.id));

        card.append(title);
        card.append(body);
        card.append(deleteBtn);
        card.append(deleteBtn2);
        $('.posts').append(card);
    })
}

function deleteHtmlPost(id) {
    let postArray = $('.page.posts').children(`#${id}`);
    postArray.remove();
}

function errorMessage(id) {
    console.log(`Ошибка удаления id${id}`);
    postModalShow(id);
}

function deletePostWithErr(id) {
    console.log('delete');
    $.ajax({
            url: `https://jsonplaceholder.typicode.com/osts/${id}`,
            type: 'DELETE',
            success: function () {
                deleteHtmlPost(id);
                console.log('Успех');
            },
            error: function () {
                errorMessage(id);
            }
        }
    );
}

function deletePost(id) {
    $.ajax({
            url: `https://jsonplaceholder.typicode.com/posts/${id}`,
            type: 'DELETE',
            success: function () {
                deleteHtmlPost(id);
                console.log(`Успешно id${id}`);
            },
            error: function () {
                errorMessage(id);
            }
        }
    );
}

function postModalShow(id) {
    let rootElem = $('#root');
    let divModal = $('<div>');
    let divInner = $('<div>');
    let pInner = $('<p>');
    divModal.attr('id','modal');
    divInner.addClass('innerModal');
    pInner.text(`Ошибка удаления поста с id=${id}`);
    rootElem.append(divInner);
    divInner.append(pInner);


    rootElem.append(divModal);
    // divInner.addEventListener('click',);
    divModal.click(function (){postModalCancel(this)});
}

function postModalCancel(obj) {
    $('.innerModal').remove();
    obj.remove();
}



// $.ajax({
//         url: 'https://jsonplaceholder.typicode.com/posts/300',
//         // type: 'POST',
//         // data: JSON.stringify({
//         //     title: 'foo',
//         //     body: 'bar',
//         //     userId: 1
//         // }),
//         datatype: 'json',
//         success: function(data) { console.log(data); },
//         error: function (pushkin) {console.log(pushkin.statusText)}
//     }
// );

// $.ajax({
//     url: 'https://jsonplaceholder.typicode.com/posts/1',
//     type: 'DELETE',
//     success: function(data) { console.log(data); }
// });

// $.ajax({
//     url: 'https://jsonplaceholder.typicode.com/posts/1',
//     type: 'PUT',
//     data: JSON.stringify({
//         id: 1,
//         title: 'foo',
//         body: 'bar',
//         userId: 1
//     }),
//     datatype: 'json',
//     success: function(data) { console.log(data); }
// });

// $.ajax({
//     url: 'https://jsonplaceholder.typicode.com/posts',
//     type: 'POST',
//     data: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1
//     }),
//     datatype: 'json',
//     success: function(data) { console.log(data); }
// });

// $.ajax({
//     url: 'URL',
//     datatype: 'json',
//     success: function(data) { successFunction(data); }
// });

// $('.card').hover(function () {
//     $(this).children('p').stop(true).slideDown(1000, ()=>{console.log('done')});
//     $(this).siblings().children('p').stop(true).slideUp();
// });

// $('.card').click(function () {
//     $(this).children('p').fadeIn();
//     $(this).siblings().children('p').fadeOut();
// });


// list.forEach((elem, args)=>{
//     let newElem = $('<div>');
//     newElem.addClass('card');
//     newElem.text(elem);
//     console.log(args);
//     newElem.css('background-color', `${colorList[args]}`);
//
//     root.append(newElem);
// });
//
// $('.card').click(function () {
//     // $(this).hide();
//     // $(this).siblings().show();
//     $(this).fadeOut(2000);
//     $(this).siblings().fadeIn(2000);
// });