async function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const occupation = document.getElementById('occupation').value;
    const goals = document.getElementById('goals').value;

    doc.setFontSize(16);
    doc.text('User Persona', 105, 20, null, null, 'center');

    doc.setFontSize(12);
    doc.text(`Name: ${name}`, 10, 40);
    doc.text(`Age: ${age}`, 10, 50);
    doc.text(`Occupation: ${occupation}`, 10, 60);
    doc.text(`Goals: ${goals}`, 10, 70, { maxWidth: 180 });

    doc.save(`${name}_persona.pdf`);
}
