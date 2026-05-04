function doPost(e) {
  var sheet = SpreadsheetApp
    .openById('1x6g2zq6Eoer2pGRBUBz2RmRNFaSKnDHX4rypXUKTSlc')
    .getActiveSheet();

  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.nome_genitore,
    data.cognome_genitore,
    data.email,
    data.telefono,
    data.nome_figlio,
    data.anno_nascita
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ result: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
