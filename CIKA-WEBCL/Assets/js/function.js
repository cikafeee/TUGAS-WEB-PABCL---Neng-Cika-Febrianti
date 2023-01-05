// Api Category https://www.themealdb.com/api/json/v1/json/v1/1/categories.php
// Api Detail https://www.themealdb.com/api/json/v1/json/v1/1/filter.php?c=${category}

export async function getCategory(){
    $.ajax({
        url : 'https://www.themealdb.com/api/json/v1/1/categories.php',
        type : 'GET', // GET POST PUT PATCH DELETE
        dataType : 'json',
        success : function (response){
            response.categories.map((item) => {
                renderCategories(item)
            })
        }, fail: function(err){
            console.error(err.message)
        }
    })
}

export async function getCategoryFoodByName(category){
    $.ajax({
        url : `https://www.themealdb.com/api/json/v1/json/v1/1/filter.php?c=${category}`,
        type :'GET',
        dataType : 'json',
        success : function (response){
            removeElemetFoodCategory()
            response.meals.map(item => {
                renderCategoriesByName(item)
            })
        }
    })
}

function removeElemetFoodCategory(){
    $('#food-category').remove()
}

// Render Elements
function renderCategories(item){
    $('#food-category').append(
        `<div>
        <a href="?category=${item.strCategory}">
        <img src="${item.strCategoryThumb}">
        <h3>${item.strCategory}</h3>
        <span>${item.strCategoryDescription}</span>
        </a>
        </div>`
    )
}

function renderCategoriesByNme(item){
    $('#food-detail').append(
        `<div>
            <a href="?category=${item.strMeal}">
            <img src="${item.strMealThumb}">
            <h3>${item.strMeal}</h3>
            </a>
        </div>`
    )
}