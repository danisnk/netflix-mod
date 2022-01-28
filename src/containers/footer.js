import React from "react";
import { Footer } from "../components";
//import "font-awesome/css/font-awesome.min.css";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Call 000-987-654-3210</Footer.Title>
      <Footer.Break>
        <Footer.Row>
          <Footer.Column>
            <Footer.Link href="#">FAQ</Footer.Link>
            <Footer.Link href="#">Investor Relations</Footer.Link>
            <Footer.Link href="#">Privacy</Footer.Link>
            <Footer.Link href="#">Speed Test</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Link href="#">Help Centre</Footer.Link>
            <Footer.Link href="#">Jobs</Footer.Link>
            <Footer.Link href="#">Cookie Preferences</Footer.Link>
            <Footer.Link href="#">Legal Notices</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Link href="#">Account</Footer.Link>
            <Footer.Link href="#">Ways to Watch</Footer.Link>
            <Footer.Link href="#">Corporate Informations</Footer.Link>
            <Footer.Link href="#">Only on Netflix</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Link href="#">Media Centre</Footer.Link>
            <Footer.Link href="#">Terms of Use</Footer.Link>
            <Footer.Link href="#">Contact Us</Footer.Link>
          </Footer.Column>
        </Footer.Row>
        <Footer.Language>
          <form>
            <Footer.Select>
              <option value="1">English</option>
              <option value="2">Spanish</option>
            </Footer.Select>
            <FontAwesomeIcon style={{ fontSize: "22px" }} icon={faCaretDown} />
          </form>
        </Footer.Language>
        <Footer.Text>Netflix India</Footer.Text>
      </Footer.Break>
    </Footer>
  );
}
