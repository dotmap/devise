const ora = require('ora')
const path = require('path')
const { spawn } = require('child_process')

const anteSpinner = ora('ANTE:  Installing dependencies...').start()
const tergoSpinner = ora('TERGO: Installing dependencies...').start()

const anteInstall = spawn('npm', ['install'], {cwd: './devise-ante'})

anteInstall.on('close', code => {
  let anteBuildCount = 0

  if (code !== 0) anteSpinner.fail('ANTE:  Failed to install dependencies, please try manually installing')
  const anteBuild = spawn('npm', ['run', 'build'], {cwd: './devise-ante'})
  anteSpinner.text = 'ANTE:  Building for production...'

  anteBuild.stdout.on('data', data => {
    if (anteBuildCount === 1) {
      anteSpinner.succeed('ANTE:  Ready to go!')
      process.exit(0)
    }
    anteBuildCount += 1
  })
})

const tergoInstall = spawn('npm', ['install', '--production'], {cwd: './devise-tergo'})

tergoInstall.on('close', code => {
  if (code !== 0) tergoSpinner.fail('TERGO: Failed to install dependencies, please try installing manually')
  tergoSpinner.succeed('TERGO: Ready to go!')
})