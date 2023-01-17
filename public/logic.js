$(document).ready(async function () {

    // Global variables and arrays
    window.machine = false; window.member = false; window.order = false; window.customer = false;
    window.machinery_array = []; window.members_array = []; window.Orders_array = []; window.Customer_array = [];
    window.Pending_Orders = 0; window.Completed_Orders = 0;
    // Global variables and arrays


    // Api Requests
    const response_1 = await fetch('http://localhost:3000/fetchmachinery');
    window.machinery_array = await response_1.json();
    const response_2 = await fetch('http://localhost:3000/fetchmembers');
    window.members_array = await response_2.json();
    const response_3 = await fetch('http://localhost:3000/allorders');
    window.Orders_array = await response_3.json();
    const response_4 = await fetch('http://localhost:3000/getallcustomers');
    window.Customer_array = await response_4.json();
    // Api Requests

    //Counting Completed and Pending Orders
    window.Orders_array.forEach((element) => {
        if (element.Order_status === "Pending") {
            window.Pending_Orders++;
        }
        else {
            window.Completed_Orders++;

        }
    })

    //Setting Values Of Dashboard Elements
    $('.member-count').html(`${window.members_array.length}`);
    $('.machine-count').html(`${window.machinery_array.length}`);
    $('.orders-count').html(`${window.Orders_array.length}`);
    $('.Completed_orders').html(`${window.Completed_Orders}`);
    $('.Pending_orders').html(`${window.Pending_Orders}`);
    $('.products').html(`${window.Completed_Orders + window.Pending_Orders}`);
    const fetch_machinery_data = () => {
        if (!window.machine) {
            display_function_machine(window.machinery_array);
        }
    }
    const fetch_member_data = () => {
        if (!window.member) {
            display_function_member(window.members_array);
        }
    }
    const fetch_order_data = () => {
        if (!window.order) {
            Display_order_data(window.Orders_array);
        }
    }
    const fetch_customer_data = () => {
        if (!window.customer) {
            window.Customer_array.forEach((element) => {
                $('#list-c-m1').append(`<li class="bg-light my-2">${element.first_name} ${element.last_name}</li><hr />`);
                $('#list-c-m2').append(`<li class="bg-light my-2">${element.phone}</li><hr />`);
                $('#list-c-m3').append(`<li class="bg-light my-2">${element.email}</li><hr />`);
                $('#list-c-m4').append(`<li class="bg-light my-2">${element.message}</li><hr />`);

            });
            window.customer = true;
        }
    }
    function display_function_machine(data) {
        window.machine = true;
        for (let i = 0; i < data.length; i++) {
            $('#list1').append(`<li class="bg-light my-2">${data[i].machine_name}</li>`);
            $('#list2').append(`<li class="bg-light my-2">${data[i].quantity}</li>`);
        }
    }
    function display_function_member(data) {
        window.member = true;
        for (let i = 0; i < data.length; i++) {

            $('#list-m0').append(`<li class="bg-light ms-3 my-2">${data[i]._id}</li>`);
            $('#list-m1').append(`<li class="bg-light my-2">${data[i].name}</li>`);
            $('#list-m2').append(`<li class="bg-light my-2">${data[i].phone}</li>`);
            $('#list-m3').append(`<li class="bg-light my-2">${data[i].address}</li>`);
            $('#list-m4').append(`<li class="bg-light my-2">${data[i].age}</li>`);
        }
    }
    function Display_order_data(data) {
        window.order = true;
        data.forEach((element) => {
            $('#list-o-m0').append(`<li class="bg-light ms-3 my-2">${element._id}</li>`);
            $('#list-o-m1').append(`<li class="bg-light my-2">${element.name}</li>`);
            $('#list-o-m2').append(`<li class="bg-light my-2">${element.phone}</li>`);
            $('#list-o-m3').append(`<li class="bg-light my-2">${element.address}</li>`);
            $('#list-o-m4').append(`<li class="bg-light my-2">${element.email}</li>`);
            $('#list-o-m5').append(`<li class="bg-light my-2">${element.Order_status}</li>`);
            element.Order_details.forEach((e) => {
                $('#list0-o').append(`<li class="bg-light my-2">${element._id}</li>`);
                $('#list1-o').append(`<li class="bg-light my-2">${e.name}</li>`);
                $('#list2-o').append(`<li class="bg-light my-2">${e.description}</li>`);
            })


        })
    }
    $('#dashboard').click(() => {

        $('#contact-details').addClass('d-none');
        $('#member-details').addClass('d-none');
        $('#machine-details').addClass('d-none');
        $('#order-details').addClass('d-none');
        $('#update-order-section').addClass('d-none');
        $('#add-machine-form').addClass('d-none');
        $('#delete-machine-form').addClass('d-none');
        $('#update-machine-form').addClass('d-none');
        $('#add-member-form').addClass('d-none');
        $('#update-member-form').addClass('d-none');
        $('#delete-member-form').addClass('d-none');
        $('.dashboard').removeClass('d-none');
        // car = window.Completed_Orders;
        // $('.dashboard').slideToggle(500, (car) => {
        //     console.log(this.car);
        // });

    });
    $('#machine').click(() => {


        $('.dashboard').addClass('d-none');
        $('#member-details').addClass('d-none');
        $('#order-details').addClass('d-none');
        $('#update-order-section').addClass('d-none');
        $('#contact-details').addClass('d-none');
        $('#add-machine-form').addClass('d-none');
        $('#delete-machine-form').addClass('d-none');
        $('#update-machine-form').addClass('d-none');
        $('#add-member-form').addClass('d-none');
        $('#update-member-form').addClass('d-none');
        $('#delete-member-form').addClass('d-none');
        $('#machine-details').removeClass('d-none');

        fetch_machinery_data();

    });
    $('#member').click(() => {

        $('.dashboard').addClass('d-none');
        $('#machine-details').addClass('d-none');
        $('#order-details').addClass('d-none');
        $('#add-machine-form').addClass('d-none');
        $('#contact-details').addClass('d-none');
        $('#delete-machine-form').addClass('d-none');
        $('#update-machine-form').addClass('d-none');
        $('#add-member-form').addClass('d-none');
        $('#update-member-form').addClass('d-none');
        $('#delete-member-form').addClass('d-none');
        $('#member-details').removeClass('d-none');

        fetch_member_data();
    });
    $('#order').click(() => {

        $('.dashboard').addClass('d-none');
        $('#member-details').addClass('d-none');
        $('#machine-details').addClass('d-none');
        $('#update-order-section').addClass('d-none');
        $('#add-machine-form').addClass('d-none');
        $('#contact-details').addClass('d-none');
        $('#delete-machine-form').addClass('d-none');
        $('#update-machine-form').addClass('d-none');
        $('#add-member-form').addClass('d-none');
        $('#update-member-form').addClass('d-none');
        $('#delete-member-form').addClass('d-none');
        $('#order-details').removeClass('d-none');
        fetch_order_data();

    });
    $('#Change-order-status').click(() => {

        $('.dashboard').addClass('d-none');
        $('#member-details').addClass('d-none');
        $('#machine-details').addClass('d-none');
        $('#order-details').addClass('d-none');
        $('#add-machine-form').addClass('d-none');
        $('#contact-details').addClass('d-none');
        $('#delete-machine-form').addClass('d-none');
        $('#update-machine-form').addClass('d-none');
        $('#add-member-form').addClass('d-none');
        $('#update-member-form').addClass('d-none');
        $('#delete-member-form').addClass('d-none');
        $('#update-order-section').removeClass('d-none');


    });
    $('#customer').click(() => {

        $('.dashboard').addClass('d-none');
        $('#member-details').addClass('d-none');
        $('#machine-details').addClass('d-none');
        $('#update-order-section').addClass('d-none');
        $('#add-machine-form').addClass('d-none');
        $('#order-details').addClass('d-none');
        $('#update-machine-form').addClass('d-none');
        $('#delete-machine-form').addClass('d-none');
        $('#add-member-form').addClass('d-none');
        $('#update-member-form').addClass('d-none');
        $('#delete-member-form').addClass('d-none');
        $('#contact-details').removeClass('d-none');
        fetch_customer_data();

    });

    //Machinery add,update,delete buttons code
    $('.add-machine-icon').click(() => {

        $('.dashboard').addClass('d-none');
        $('#member-details').addClass('d-none');
        $('#update-order-section').addClass('d-none');
        $('#order-details').addClass('d-none');
        $('#contact-details').addClass('d-none');
        $('#machine-details').addClass('d-none');
        $('#update-machine-form').addClass('d-none');
        $('#delete-machine-form').addClass('d-none');
        $('#add-member-form').addClass('d-none');
        $('#update-member-form').addClass('d-none');
        $('#delete-member-form').addClass('d-none');
        $('#add-machine-form').removeClass('d-none');

    });
    $('.update-machine-icon').click(() => {

        $('.dashboard').addClass('d-none');
        $('#member-details').addClass('d-none');
        $('#update-order-section').addClass('d-none');
        $('#order-details').addClass('d-none');
        $('#contact-details').addClass('d-none');
        $('#machine-details').addClass('d-none');
        $('#add-machine-form').addClass('d-none');
        $('#delete-machine-form').addClass('d-none');
        $('#add-member-form').addClass('d-none');
        $('#update-member-form').addClass('d-none');
        $('#delete-member-form').addClass('d-none');
        $('#update-machine-form').removeClass('d-none');

    });
    $('.delete-machine-icon').click(() => {

        $('.dashboard').addClass('d-none');
        $('#member-details').addClass('d-none');
        $('#update-order-section').addClass('d-none');
        $('#order-details').addClass('d-none');
        $('#contact-details').addClass('d-none');
        $('#machine-details').addClass('d-none');
        $('#add-machine-form').addClass('d-none');
        $('#update-machine-form').addClass('d-none');
        $('#add-member-form').addClass('d-none');
        $('#update-member-form').addClass('d-none');
        $('#delete-member-form').addClass('d-none');
        $('#delete-machine-form').removeClass('d-none');

    });
    //Machinery add,update,delete buttons code

    //Machinery add,update,delete Api Code
    $('#add-machine-btn').click(async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:3000/addmachinery`, {
            method: 'POST',
            body: JSON.stringify({
                machine_name: $('#m_name').val(),
                quantity: $('#quantity').val(),
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response.status === 200) {
            $('#alert-success').removeClass('d-none');
            $('#alert-success').html('<i class="bi bi-check-circle-fill" style="color: green"></i> Success! Item Added Successfully');
            setTimeout(() => {
                $('#alert-success').addClass('d-none');
                window.location.reload();
            }, 5000)
        }
        else {
            $('#alert-failure').removeClass('d-none');
            $('#alert-failure').html('<i class="bi bi-exclamation-triangle-fill" style="color: red"></i> Error! Try Again ');
            setTimeout(() => {
                $('#alert-failure').addClass('d-none');
            }, 5000)
        }
    });
    $('#update-machine-btn').click(async (event) => {
        event.preventDefault();
        let data = {}
        let query = $('#old_name').val();
        if ($('#new_name').val()) {
            data.machine_name = $('#new_name').val();
        }
        if ($('#new_quantity').val()) {
            data.quantity = $('#new_quantity').val();
        }
        console.log(query);
        console.log(data);
        const response = await fetch(`http://localhost:3000/updatemachinery/${query}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response.status === 200) {
            $('#alert-success').removeClass('d-none');
            $('#alert-success').html('<i class="bi bi-check-circle-fill" style="color: green"></i> Success! Record Updated');
            setTimeout(() => {
                $('#alert-success').addClass('d-none');
                window.location.reload();
            }, 5000)
        }
        else {
            $('#alert-failure').removeClass('d-none');
            $('#alert-failure').html('<i class="bi bi-exclamation-triangle-fill" style="color: red"></i> Error! Try Again ');
            setTimeout(() => {
                $('#alert-failure').addClass('d-none');
            }, 5000)
        }
    });
    $('#delete-machine-btn').click(async (event) => {
        event.preventDefault();
        let query = $('#name-to-del').val();
        const response = await fetch(`http://localhost:3000/deletemachinery/${query}`, { method: 'DELETE' });
        console.log(response.status);
        if (response.status === 200) {
            $('#alert-success').removeClass('d-none');
            $('#alert-success').html('<i class="bi bi-check-circle-fill" style="color: green"></i> Success! Record Deleted');
            setTimeout(() => {
                $('#alert-success').addClass('d-none');
                window.location.reload();
            }, 5000)
        }
        else {
            $('#alert-failure').removeClass('d-none');
            $('#alert-failure').html('<i class="bi bi-exclamation-triangle-fill" style="color: red"></i> Error! Try Again ');
            setTimeout(() => {
                $('#alert-failure').addClass('d-none');
            }, 5000)
        }
    });
    //Machinery add,update,delete Api code

    //Member add,update,delete buttons code
    $('#add-member-icon').click(() => {

        $('.dashboard').addClass('d-none');
        $('#member-details').addClass('d-none');
        $('#update-order-section').addClass('d-none');
        $('#order-details').addClass('d-none');
        $('#contact-details').addClass('d-none');
        $('#machine-details').addClass('d-none');
        $('#add-machine-form').addClass('d-none');
        $('#update-machine-form').addClass('d-none');
        $('#delete-machine-form').addClass('d-none');
        $('#update-member-form').addClass('d-none');
        $('#delete-member-form').addClass('d-none');
        $('#add-member-form').removeClass('d-none');

    });
    $('#update-member-icon').click(() => {

        $('.dashboard').addClass('d-none');
        $('#member-details').addClass('d-none');
        $('#update-order-section').addClass('d-none');
        $('#order-details').addClass('d-none');
        $('#contact-details').addClass('d-none');
        $('#machine-details').addClass('d-none');
        $('#add-machine-form').addClass('d-none');
        $('#update-machine-form').addClass('d-none');
        $('#delete-machine-form').addClass('d-none');
        $('#delete-member-form').addClass('d-none');
        $('#add-member-form').addClass('d-none');
        $('#update-member-form').removeClass('d-none');


    });
    $('#delete-member-icon').click(() => {

        $('.dashboard').addClass('d-none');
        $('#member-details').addClass('d-none');
        $('#update-order-section').addClass('d-none');
        $('#order-details').addClass('d-none');
        $('#contact-details').addClass('d-none');
        $('#machine-details').addClass('d-none');
        $('#add-machine-form').addClass('d-none');
        $('#update-machine-form').addClass('d-none');
        $('#delete-machine-form').addClass('d-none');
        $('#update-member-form').addClass('d-none');
        $('#add-member-form').addClass('d-none');
        $('#delete-member-form').removeClass('d-none');


    });
    //Member add,update,delete buttons code

    //Member add,update,delete Api's code
    $('#add-member-btn').click(async (e) => {

        e.preventDefault();
        const response = await fetch(`http://localhost:3000/addmember`, {
            method: 'POST',
            body: JSON.stringify({
                name: $('#member-name').val(),
                phone: $('#member-phone').val(),
                address: $('#member-address').val(),
                age: $('#member-age').val(),
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response.status === 200) {
            $('#alert-success').removeClass('d-none');
            $('#alert-success').html('<i class="bi bi-check-circle-fill" style="color: green"></i> Success! Record Added');
            setTimeout(() => {
                $('#alert-success').addClass('d-none');
                window.location.reload();
            }, 5000)
        }
        else {
            $('#alert-failure').removeClass('d-none');
            $('#alert-failure').html('<i class="bi bi-exclamation-triangle-fill" style="color: red"></i> Error! Try Again ');
            setTimeout(() => {
                $('#alert-failure').addClass('d-none');
            }, 5000)
        }
    });
    $('#update-member-btn').click(async (e) => {
        e.preventDefault();
        let data = {}
        let query = $('#mem-id').val();
        if ($('#new-name').val()) {
            data.name = $('#new-name').val();
        }
        if ($('#new-number').val()) {
            data.phone = $('#new-number').val();
        }
        if ($('#new-address').val()) {
            data.address = $('#new-address').val();
        }
        if ($('#new-age').val()) {
            data.age = $('#new-age').val();
        }
        const response = await fetch(`http://localhost:3000/updatemember/${query}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response.status === 200) {
            $('#alert-success').removeClass('d-none');
            $('#alert-success').html('<i class="bi bi-check-circle-fill" style="color: green"></i> Success! Record Updated Successfully');
            setTimeout(() => {
                $('#alert-success').addClass('d-none');
                window.location.reload();
            }, 5000)
        }
        else {
            $('#alert-failure').removeClass('d-none');
            $('#alert-failure').html('<i class="bi bi-exclamation-triangle-fill" style="color: red"></i> Error! Try Again ');
            setTimeout(() => {
                $('#alert-failure').addClass('d-none');
            }, 5000)
        }

    });
    $('#delete-member-btn').click(async (e) => {
        e.preventDefault();
        let id = $('#mem-delete-id').val();
        if (confirm(`Are you sure to delete member with id : ${id}\nThis member will be permanently deleted.`)) {
            const response = await fetch(`http://localhost:3000/deletemember/${id}`, {
                method: 'DELETE'
            });
            if (response.status === 200) {
                $('#alert-success').removeClass('d-none');
                $('#alert-success').html('<i class="bi bi-check-circle-fill" style="color: green"></i> Success! Member Record Deleted Successfully');
                setTimeout(() => {
                    $('#alert-success').addClass('d-none');
                    window.location.reload();
                }, 5000)
            }
            else {
                $('#alert-failure').removeClass('d-none');
                $('#alert-failure').html('<i class="bi bi-exclamation-triangle-fill" style="color: red"></i> Error! Try Again ');
                setTimeout(() => {
                    $('#alert-failure').addClass('d-none');
                }, 5000)
            }
        }
        else {
            $('#mem-delete-id').val("");
        }
    });
    //Member add,update,delete Api's code


    $('#status-change-btn').click(async (e) => {
        e.preventDefault();
        let id = $('#staus-update-id').val();
        if (confirm(`Confirm update status of Customer Id : (${id})`)) {

            const response = await fetch(`http://localhost:3000/updateorder/${id}`, {
                method: 'PATCH'
            });
            if (response.status === 200) {
                $('#alert-status-s').removeClass('d-none');
                setTimeout(() => {
                    window.location.reload();
                }, 3000)
            }
            else {
                $('#alert-status-d').removeClass('d-none');
                setTimeout(() => {
                    $('#alert-status-d').addClass('d-none');
                }, 3000)
            }
        }
    });

});
