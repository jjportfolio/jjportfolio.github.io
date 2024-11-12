// Module Json
function dataJson() {
    async function loadJson(filePath) {
        try {
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Ошибка загрузки JSON:', error);
            return null;
        }
    }

    function replacePlaceholders(template, data) {
        return template.replace(/{{\s*([\w.]+)\s*}}/g, (match, key) => {
            const keys = key.split('.');
            let value = data;
            for (let k of keys) {
                value = value ? value[k] : undefined;
            }
            return value !== undefined ? value : match;
        });
    }

    async function processTemplates() {
        const elements = document.querySelectorAll('[data-json]');

        for (let element of elements) {
            const filePath = element.getAttribute('data-json');
            const jsonData = await loadJson(filePath);

            if (jsonData) {
                element.innerHTML = replacePlaceholders(element.innerHTML, jsonData);
            }
        }
    }

    document.addEventListener("DOMContentLoaded", processTemplates);
}

export default dataJson;
