rm --recursive -f dist/public/*.* 
rm --recursive -f dist/views/*.* 
rm --recursive -f dist/css/*.* 
rm --recursive -f dist/bootstrap/*.* 
rm --recursive -f src/bootstrap/*.* 
rm --recursive -f src/jquery/*.* 
rm --recursive -f dist/jquery/*.* 
cp --recursive src/public dist
cp --recursive src/views dist 
cp --recursive src/css dist 
cp --recursive node_modules/bootstrap/dist/css dist/bootstrap
cp --recursive node_modules/bootstrap/dist/js dist/bootstrap
cp --recursive node_modules/bootstrap/dist/css src/bootstrap
cp --recursive node_modules/bootstrap/dist/js src/bootstrap
cp --recursive node_modules/jquery-slim/dist src/jquery-slim
cp --recursive node_modules/jquery-slim/dist dist/jquery-slim



