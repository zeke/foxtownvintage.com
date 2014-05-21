# Harp Barebones Template

This is a template app for use with the [Harp web server](http://harpjs.com).

## Use it

If you don't already have node installed, [go to nodejs.org](http://nodejs.org/)
and click "Install". Easy peasy.

```sh
# Install Harp
npm install harp --global

# Download this repo as your harp boilerplate
harp init myproject --boilerplate zeke/harp-barebones

# Run the server
harp server myproject
```

Now open [localhost:9000](http://localhost:9000) in your browser. Rejoice.

## Deploy it to Heroku

```sh
git init
git add .
git commit -m "so it begins"
heroku create myproject
heroku config:set BUILDPACK_URL=https://github.com/zeke/harp-buildpack.git
git push heroku master
heroku open
```

## License

MIT
