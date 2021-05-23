while test $# -gt 0; do
  case "$1" in
    -h|--help)
      echo "$package - attempt to capture frames"
      echo " "
      echo "$package [options] application [arguments]"
      echo " "
      echo "options:"
      echo "-h, --help                show brief help"
      echo "-d, --dist=DIST       specify an dist to build"
      echo "-v, --version=VERSION      specify a version to build name"
      exit 0
      ;;
    -d)
      shift
      if test $# -gt 0; then
        export DIST=$1
      else
        echo "no dist specified"
        exit 1
      fi
      shift
      ;;
    --dist*)
      export DIST=`echo $1 | sed -e 's/^[^=]*=//g'`
      shift
      ;;
    -v)
      shift
      if test $# -gt 0; then
        export VERSION=$1
      else
        echo "no version specified"
        exit 1
      fi
      shift
      ;;
    --version*)
      export VERSION=`echo $1 | sed -e 's/^[^=]*=//g'`
      shift
      ;;
    *)
      break
      ;;
  esac
done

echo "building $DIST with $VERSION version"

web-ext build --artifacts-dir=build --overwrite-dest --ignore-files=build.sh readme.md --filename="basecamp-replier-$VERSION-$DIST.zip"