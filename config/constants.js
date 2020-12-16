const CLIENT_ID = '9e7c0abcc7ea050362878aa996a2adf9';
const CLIENT_SECRET = '0c949f53f2174f00737756579cf06305';
const SIGNING_SECRET = '09527dd480b0e63399e48324bcf10582';
const PERSONAL_API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjkxMTU1MDUxLCJ1aWQiOjE3MDY4Nzk2LCJpYWQiOiIyMDIwLTExLTE3VDE1OjE0OjA4LjAwMFoiLCJwZXIiOiJtZTp3cml0ZSJ9.1kpkmW8sqIQY8td8mspi9C66n9vU3P2SB3Le3XPOKgg';

// WIX Collection Config
const WIX_NEW_ITEM = 'https://fayez00.wixsite.com/website/_functions/create/';
const WIX_UPDATE_ITEM = 'https://fayez00.wixsite.com/website/_functions/update/';
const WIX_UPLOAD_FILE = 'https://fayez00.wixsite.com/website/_functions/upload/';

// Mapping fields into Monday with Wix db columns
const FIELDS = {
    name: 'supplier',
    text: 'product',
    status:  'status',
    date4: 'renew',
    date: 'expire',
    files: 'plan',
    files_1: 'certificate',
    files7: 'documents',
    text_updates: 'updates'
};

module.exports = {
    CLIENT_ID,
    CLIENT_SECRET,
    SIGNING_SECRET,
    PERSONAL_API_TOKEN,
    FIELDS,
    WIX_NEW_ITEM,
    WIX_UPDATE_ITEM,
    WIX_UPLOAD_FILE
}