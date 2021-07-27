const { watch } = require('gulp');
const { exec } = require('child_process');

function swaggerMerge(cb) {
  const command = "npm run merge"
  exec(command, function (err, output, code) {
    if (err || code.length > 0) {
      console.log('===Failed to merge===')
      console.log(code)
    }
  })
  cb();
}
exports.default = () => {
  watch(['api/**/*.yml','!api/swagger.yml'], swaggerMerge);
}
