import {Col, Row, Form, Stack, Button} from "react-bootstrap"
import { Link } from "react-router-dom"
import CreatetableReactSelect from "react-select/creatable"
export function NoteForm() {
    return (
        <Form>
            <Stack gap={4}>
                <Row>
                    <Col>
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="tags">
                            <Form.Label>Tags</Form.Label>
                            <CreatetableReactSelect isMulti  />
                            </Form.Group> 
                    </Col>
                </Row>
                <Form.Group controlId="markdown">
                    <Form.Label>Body</Form.Label>  
                    <Form.Control required as="textarea" rows={15} />  
                </Form.Group>
                <Stack direction="horizontal" gap={2} >
                    <Button type="submit" variant="primary">Save</Button>
                    <Link to="..">
                    <Button type="button" variant="outline-secondary">Cancel</Button>
                    </Link>
                </Stack>
            </Stack>
        </Form>
    )
}