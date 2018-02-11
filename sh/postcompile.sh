rm --recursive -f dist/public/*.* 
rm --recursive -f dist/views/*.* 
rm --recursive -f dist/css/*.* 
rm --recursive -f dist/bootstrap/*.* 
rm --recursive -f src/bootstrap/*.* 
cp --recursive src/public dist
cp --recursive src/views dist 
cp --recursive src/css dist 
cp --recursive node_modules/bootstrap/dist dist/bootstrap
cp --recursive node_modules/bootstrap/dist src/bootstrap

