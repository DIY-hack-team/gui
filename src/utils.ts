

export function parseDatetime(dt: string): Date {
    const datetimeParts = dt.split(' ');
    if (datetimeParts.length != 2) {
        throw new Error(`Expected datetimeParts.length == 2, your datetimeParts: ${datetimeParts}`);
    }

    const dateParts = datetimeParts[0].split('.');
    if (dateParts.length != 3) {
        throw new Error(`Expected dateParts.length == 3, your dateParts: ${dateParts}`);
    }
    const year = Number(dateParts[2]);
    const month = Number(dateParts[1]);
    const day = Number(dateParts[0]);

    const timeParts = datetimeParts[1].split(':');
    if (timeParts.length != 3) {
        throw new Error(`Expected timeParts.length == 2, your timeParts: ${timeParts}`);
    }
    const hours = Number(timeParts[0]);
    const minutes = Number(timeParts[1]);
    const seconds = Number(timeParts[2]);

    return new Date(
        year,
        month,
        day,
        hours,
        minutes,
        seconds
    );
}

function generateChars(len: number, c?: string, ) {
    if (len < 1) {
        return '';
    }

    c = c || '';

    if (c.length > 1) {
        throw new Error(`Expected char.length == 1, your char = ${c}`);
    }

    let chars = '';
    for (let i: number = 0; i < len; ++i) {
        chars += c;
    }
    return chars
}

export function lpad(v: string, pad: number, char?: string) {
    return generateChars(pad - v.length, char) + v;
}

export function rpad(v: string, pad: number, char?: string) {
    return v + generateChars(pad - v.length, char);
}
