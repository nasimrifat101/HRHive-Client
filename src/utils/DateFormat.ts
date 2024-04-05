const FormatDate = (date: string): string => {
    const inputDate = new Date(date);
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'short', day: '2-digit' };
    const formatDate = inputDate.toLocaleDateString('en-US', options);
    const dateParts = formatDate.split(' ');

    const weekday = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2].replace(',', '')
    const year = dateParts[3];

    const finalFormatDate = `${weekday} ${day}-${month}-${year}`;
    return finalFormatDate;
};

export default FormatDate;
