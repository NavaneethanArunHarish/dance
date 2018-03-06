let autoId = 0;

export default function() {
    autoId++;
    return `${autoId}`;
}
