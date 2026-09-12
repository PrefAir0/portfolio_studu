        alert ("Существует ли парралелограмм")
        
        let Ax = prompt("Введите Ax");
        let Ay = prompt("Введите Ay");

        let Bx = prompt("Введите Bx");
        let By = prompt("Введите By");

        let Cx = prompt("Введите Cx");
        let Cy = prompt("Введите Cy");

        let Dx = prompt("Введите Dx");
        let Dy = prompt("Введите Dy");

        if (Ax === "" || Ay === "" || Bx === "" || By === "" || Cx === "" || Cy === "" || Dx === "" || Dy === "") {
            alert("Введите все значения");
        }
        else {
            Ax = Number(Ax);
            Ay = Number(Ay);
            Bx = Number(Bx);
            By = Number(By);
            Cx = Number(Cx);
            Cy = Number(Cy);
            Dx = Number(Dx);
            Dy = Number(Dy);

            let ACx = (Ax + Cx) / 2;
            let ACy = (Ay + Cy) / 2;

            let BDx = (Bx + Dx) / 2;
            let BDy = (By + Dy) / 2;

            if (ACx === BDx && ACy === BDy) {
                alert("Параллелограмм существует");
            }
            else {
                alert("Параллелограмм не существует, или введено некоректное значение");
            }
        }