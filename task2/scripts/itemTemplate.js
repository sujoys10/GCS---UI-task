function itemTemplate(item){
    return `
            <p class="field-title">${item.name}</p>
            <p class="order__amount">${item.value.toFixed(2)}</p>
        `
}