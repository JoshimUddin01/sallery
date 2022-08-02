const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Total paid',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


let add_btn = document.querySelector(".add");
let employe_name = document.querySelector("#user_name");
let salary_value = document.querySelector("#user_sallery");

add_btn.addEventListener("click", function get_value(){

        myChart.data.datasets[0].data.push(salary_value.value)
        myChart.data.labels.push(employe_name.value)

        myChart.update();
    })

    salary_value.addEventListener("keydown",(e)=>{
        if(e.key === "Enter") {
           add_btn.click();
        }
    })