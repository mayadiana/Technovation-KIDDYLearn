document.querySelector('unavailable').addEventListener("click", () => {
    Swal.fire({
        heightAuto: false,
        icon: 'error',
        title: 'Lectie indisponibila momentan...',
        text: 'Ne pare rau, din pacate inca lucram la finalizarea acestei lectii.',
        confirmButtonColor: '#7C95E0',
        confirmButtonText: 'OK',
    })
})