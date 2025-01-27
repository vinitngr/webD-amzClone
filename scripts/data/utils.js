export function filterAndSortProducts(products, query) {
    products.forEach(product => {
        product.score = 0;
        const queryPart = query.toLowerCase().trim().split(/\s+/);

        
        queryPart.forEach(part => {
            const isTagMatch = product.keywords.some(keyword => 
                keyword.toLowerCase() === part
            );

            if (isTagMatch) {
                product.score += 4;
            }
            const regexFullWord = new RegExp(`\\b${part}\\b`);
            if (regexFullWord.test(product.name.toLowerCase())) {
                product.score += 3.5;
            }
            if (product.name.toLowerCase().includes(part)) {
                product.score += 2.5;
            }
        });
    });

    return products
        .filter(product => product.score > 0)
        .sort((a, b) => b.score - a.score);
}
