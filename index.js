function generate() {
    const lengt = Number(document.getElementById("len").value);
    const numbers = document.getElementById("ex_num");
    const lowercase = document.getElementById("ex_low");
    const uppercase = document.getElementById("ex_up");
    const special = document.getElementById("ex_spec");
    const output = document.getElementById("out");

    const num_arr = "1234567890";
    const low_arr = "abcdefghijklmnopqrstuvwxyz";
    const up_arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const spec_arr = "!#$%^&*?";

    let outstr = "";

    let canUse = "";
    if (lengt < 8 || lengt > 150) {
        alert("Length must be between 8-150!");
    } else if (!numbers.checked && !lowercase.checked && !uppercase.checked && !special.checked) {
        alert("Maust have at least 1 box checked!")
    } else {
        if (numbers.checked) {
            canUse = canUse.concat(num_arr);
        }
        if (lowercase.checked) {
            canUse = canUse.concat(low_arr);
        }
        if (uppercase.checked) {
            canUse = canUse.concat(up_arr);
        }
        if (special.checked) {
            canUse = canUse.concat(spec_arr);
        }

        for (let i = 0; i < lengt; i++) {
            var rand1 = (canUse[(Math.floor(Math.random() * canUse.length))]);
            let temp = outstr.concat(rand1);
            outstr = temp;
        }
        output.value = outstr;
    }
}