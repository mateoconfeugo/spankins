sudo jsvc -java-home "$JAVA_HOME" -cp "$(pwd)/target/spankins-0.1.0-standalone.jar" -outfile "$(pwd)/out.txt"
sudo jsvc -java-home "$JAVA_HOME" -cp "$(pwd)/target/spankins-0.1.0-standalone.jar" -stop spankins.core
