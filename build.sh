while test $# -gt 0; do
  case "$1" in
    -h|--help)
      echo "$package - attempt to capture frames"
      echo " "
      echo "$package [options] application [arguments]"
      echo " "
      echo "options:"
      echo "-h, --help                show brief help"
      echo "-n, --name=NAME       specify an action to use"
      echo "-v, --version=DIR      specify a directory to store output in"
      exit 0
      ;;
    -n)
      shift
      if test $# -gt 0; then
        export NAME=$1
      else
        echo "no name specified"
        exit 1
      fi
      shift
      ;;
    --name*)
      export NAME=`echo $1 | sed -e 's/^[^=]*=//g'`
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

echo "building $NAME with $VERSION version"

web-ext build --artifacts-dir=build --overwrite-dest --ignore-files=build.sh readme.md --filename="basecamp-replier-$VERSION-$NAME.zip"

$SHELL