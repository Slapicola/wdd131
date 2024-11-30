// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [{ sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}],
    enrollStudent: function(sectionNum) {
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            renderTable(this.sections)
        }
    },
    dropStudent: function(sectionNum) {
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled--;
            renderTable(this.sections)
        }
    }
};

document.querySelector("#enrollStudent").addEventListener("click", function() {
    const sectNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectNum);
});

document.querySelector("#dropStudent").addEventListener("click", function() {
    const sectNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectNum);
});

function setCourse(course) {
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

function addToTable(section) {
    return <tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
    </tr>
}

function renderTable(sections) {
    const html = sections.map(addToTable);
    document.querySelector("#sections").innerHTML = html.join("");
}

setCourse(aCourse);
renderTable(aCourse.sections);